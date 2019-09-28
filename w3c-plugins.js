function w3cPagination(editor) {
    editor.BlockManager.add('pagination', {
        label: 'Pagination',
        category: 'WC3', // block catagory group
        attributes: {
            class: 'fa fa-arrows-h'
        }, // class, id, ete...
        content: {
            tagName: 'div', // outermost element to be placed in html body
            removable: true, // can it be removed
            draggable: true, // can it be moved around inside structure
            droppable: true, // can it be placed inside another component
            copyable: true, // Disable copy/past
            style: { // style for this node. assigned in css by ID
            },
            script: '',
            attributes: {}, // class, id, ete...
            components: [{ // child elements to the top level element
                tagName: 'a',
                attributes: {
                    href: "#"
                },
                style: {
                    color: 'black',
                    float: 'left',
                    padding: '8px 16px',
                    'text-decoration': 'none',
                    transition: 'background-color .3s'
                },
                components: [{ // children of the child
                    content: '&laquo;' // html string inside textnode
                }]
            }, {
                tagName: 'a',
                attributes: {
                    href: "#"
                },
                style: {
                    color: 'black',
                    float: 'left',
                    padding: '8px 16px',
                    'text-decoration': 'none',
                    transition: 'background-color .3s'
                },
                components: [{ // children of the child
                    type: 'textnode',
                    content: '1' // html string inside textnode
                }]
            }, {
                tagName: 'a',
                attributes: {
                    href: "#"
                },
                style: {
                    color: 'black',
                    float: 'left',
                    padding: '8px 16px',
                    'text-decoration': 'none',
                    transition: 'background-color .3s'
                },
                components: [{ // children of the child
                    type: 'textnode',
                    content: '2' // html string inside textnode
                }]
            }, {
                tagName: 'a',
                attributes: {
                    href: "#"
                },
                style: {
                    color: 'white',
                    float: 'left',
                    padding: '8px 16px',
                    'text-decoration': 'none',
                    'background-color': 'dodgerblue',
                    transition: 'background-color .3s'
                },
                components: [{ // children of the child
                    type: 'textnode',
                    content: '3' // html string inside textnode
                }]
            }, {
                tagName: 'a',
                attributes: {
                    href: "#"
                },
                style: {
                    color: 'black',
                    float: 'left',
                    padding: '8px 16px',
                    'text-decoration': 'none',
                    transition: 'background-color .3s'
                },
                components: [{ // children of the child
                    type: 'textnode',
                    content: '4' // html string inside textnode
                }]
            }, {
                tagName: 'a',
                attributes: {
                    href: "#"
                },
                style: {
                    color: 'black',
                    float: 'left',
                    padding: '8px 16px',
                    'text-decoration': 'none',
                    transition: 'background-color .3s'
                },
                components: [{ // children of the child
                    content: '&raquo;' // html string inside textnode
                }]
            }]
        }
    });
}
