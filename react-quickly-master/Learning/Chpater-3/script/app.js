// var textAreaCounter = React.createClass({

//     propTypes: {
//         text: React.PropTypes.string,
//     },
//     getInitialState: function () {
//         return{
//             text: 'Bob',
//         };
//     },
//     _textChange: function(ev){
//         this.setState({
//             text: ev.target.value,
//         });
//     },
//     render: function() {
//         console.log("this.state", this.props)

//         return React.DOM.div(null,
//             React.DOM.textarea({
//                 defaultValue: this.state.text,
//                 onChange: this._textChange,
//             }),
//             React.DOM.h3(null, this.state.text.length)
//         );
//     }
//     })
//     ReactDOM.render(
//         React.createElement(textAreaCounter, {
//         text: "salman",
//         }),
//         document.getElementById("app")
//     )


var headers = [
    "Book", "Author", "Language", "Published", "Sales"
];
var data = [
    ["The Lord of the Rings", "J. R. R. Tolkien",
    "English", "1954–1955", "150 million"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
    "French", "1943", "140 million"],
    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
    "English", "1997", "107 million"],
    ["And Then There Were None", "Agatha Christie",
    "English", "1939", "100 million"],
    ["Dream of the Red Chamber", "Cao Xueqin",
    "Chinese", "1754–1791", "100 million"],
    ["The Hobbit", "J. R. R. Tolkien",
    "English", "1937", "100 million"],
    ["She: A History of Adventure", "H. Rider Haggard",
    "English", "1887", "100 million"],
];

// var Excel = React.createClass({
//     render: function() {
//         return (
//             React.DOM.table(null,
//                 React.DOM.thead(null,
//                     React.DOM.tr(null,
//                         //this.props.headers.map(function(title) {
//                           //  return React.DOM.th(null, title);
//                         //})
//                         this.props.headers.map(function(title, idx) {
//                             return React.DOM.th({key: idx}, title);
//                         })
                        
//                     )
//                 )
//             )
//         );
//     }
// });



//-------------------------------without Erorr
// data.map(function(row) {
//     return (
//         React.DOM.tr(null,
//             row.map(function(cell) {
//                 return React.DOM.td(null, cell);
//             })
//         )
//     );
// })
// var Excel = React.createClass({
//     getInitialState: function() {
//         return {data: this.props.initialData};
//     },
//     render: function() {
//         return (
//             React.DOM.table(null,
//                 React.DOM.thead(null,
//                     React.DOM.tr(null,
//                         this.props.headers.map(function(title, idx) {
//                             return React.DOM.th({key: idx}, title);
//                         })
//                 )
//             ),
//     React.DOM.tbody(null,
//         this.state.data.map(function(row, idx) {
//             return (
//                 React.DOM.tr({key: idx},
//                     row.map(function(cell, idx) {
//                         return React.DOM.td({key: idx}, cell);
//                     })
//                 )
//             );
//         })
//         )
//     )
//     );
//     }
// });
// data.map(function(row) {
//     return (
//         React.DOM.tr(null,
//             row.map(function(cell) {
//                 return React.DOM.td(null, cell);
//             })
//         )
//     );
// })

//---------------------with sorting of an array------
var Excel = React.createClass({
    getInitialState: function() {
        return {
            data: this.props.initialData,
            sortby: null,
            descending: false,
            edit: null
        };
    },
    _sort: function(e){
        var column = e.target.cellIndex;
        var data = this.state.data.slice();
        var descending = this.state.sortby === column && !this.state.descending;
        data.sort(function(a,b){
            return descending
                ? a[column] < b[column]
                :  a[column] > b[column];
        });
        this.setState({
            data: data,
            sortby: column,
            descending: descending 
        });
    },
    _showEditor: function(e) {
        this.setState({edit: {
            row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex,
            }
        });
    },
    _save: function(e) {
        e.preventDefault();
        var input = e.target.firstChild;
        var data = this.state.data.slice();
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({
            edit: null, // done editing
            data: data,
        });
    },
    _toggleSearch: function() {
        if (this.state.search) {
            this.setState({
                data: this._preSearchData,
                search: false,
            });
        this._preSearchData = null;
        } else {
            this._preSearchData = this.state.data;
            this.setState({
                search: true,  
            });
        }
    },
    _search: function(e) {
        var needle = e.target.value.toLowerCase();
        if (!needle) { // the search string is deleted
            this.setState({data: this._preSearchData});
            return;
        }
        var idx = e.target.dataset.idx; // which column to search
        var searchdata = this._preSearchData.filter(function(row) {
            return row[idx].toString().toLowerCase().indexOf(needle) > -1;
        });
        this.setState({data: searchdata});
    },
    _renderSearch: function() {
        if (!this.state.search) {
            return null;
        }
        return (
            React.DOM.tr({onChange: this._search},
                this.props.headers.map(function(_ignore, idx) {
                    return React.DOM.td({key: idx},
                        React.DOM.input({
                            type: 'text',
                            'data-idx': idx,
                        })
                    );
                })
            )
        );
    },
    _download: function(format, ev) {
        var contents = format === 'json'
            ? JSON.stringify(this.state.data)
            : this.state.data.reduce(function(result, row) {
            return result
            + row.reduce(function(rowresult, cell, idx) {
            return rowresult
            + '"'
            + cell.replace(/"/g, '""')
            + '"'
            + (idx < row.length - 1 ? ',' : '');
            }, '')
            + "\n";
            }, '');
            var URL = window.URL || window.webkitURL;
            var blob = new Blob([contents], {type: 'text/' + format});
            ev.target.href = URL.createObjectURL(blob);
            ev.target.download = 'data.' + format;
    },
    _renderToolbar: function(){
        return(
                 React.DOM.div({id:'tool-bar'},
                 React.DOM.button(
                     {
                         className:'search-btn',
                         onClick: this._toggleSearch
                      },
                     "Search"
                 ),
                  React.DOM.a({
                      className:'download-btn',
                    onClick: this._download.bind(this, 'json'),
                     href: 'data.json'
                  }, 
                  'Export JSON'
                  ),
                  React.DOM.a({
                     className:'download-btn',
                     onClick: this._download.bind(this, 'csv'),
                     href: 'data.csv'
                  },
                    'Export CSV'
                    )
                    )
 
             );
    },
    _renderTable: function(){
        return (
            React.DOM.table(null,
                React.DOM.thead({onClick: this._sort},
                    React.DOM.tr(null,
                        this.props.headers.map(function(title, idx) {
                            return React.DOM.th({key: idx}, title);
                        })
                )
            ),
    //React.DOM.tbody(null,
        React.DOM.tbody({onDoubleClick: this._showEditor},
            this._renderSearch(),
            this.state.data.map(function(row, rowidx) {
                return (
                    React.DOM.tr({key: rowidx},
                        row.map(function(cell, idx) {
                            var content = cell;
                            var edit = this.state.edit;
                            if(edit && edit.row === rowidx && edit.cell === idx) {
                                content = React.DOM.form({onSubmit: this._save},
                                    React.DOM.input({
                                        type: 'text',
                                            defaultValue: content,
                                    })
                                );
                            }
                            return React.DOM.td({
                                key: idx,
                                'data-row': rowidx
                            }, content);
                            
                        }, this)
                    )
                );
            }, this)
        )
        
    )
    );
    //);
    },
    render: function() {
        return (
            React.DOM.div(null,
                this._renderToolbar(),
                this._renderTable()
            )
        )
    }
});
ReactDOM.render(
    React.createElement(Excel, {
        headers: headers,
        initialData: data,
    }),
    document.getElementById("app")
);