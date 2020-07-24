const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { format } = wp.date;
const { RichText, InnerBlocks } = wp.blockEditor;
const { dispatch, subscribe, select, withSelect } = wp.data;

registerBlockType('mojblocks/example', {
    title: __('Example Block', 'mojblocks'),
    category: 'mojblocks',
    icon: 'admin-post',
    example: {
        attributes: {
            lastSaved: __('5 July 1948'),
        },
    },
    attributes: {
        lastSaved: {
            type: 'string',
            source: 'html',
            selector: '.last-saved-date'
        }
    },
    edit: withSelect(select => {
        return { savedDate: select('core/editor').getEditedPostAttribute('modified') };
    })(({ savedDate, className, setAttributes, attributes: { lastSaved } }) => {

        if (savedDate) {
            let formattedDate = format('d F Y', (new Date(savedDate)));
            if (lastSaved !== formattedDate) {
                setAttributes({ lastSaved: formattedDate });
                if (typeof lastSaved === 'undefined') {
                    setAttributes({ lastSaved: formattedDate });
                    dispatch('core/editor').savePost();
                }
            }

            return (
                <div className="nhsuk-review-date">
                    <p className="nhsuk-body-s">
                        Page last reviewed: <span className="last-saved-date">{lastSaved}</span>
                    </p>
                </div>
            );
        }

    }),
    save: props => {

        const { className, attributes: { lastSaved } } = props;

        return (
            <div className="nhsuk-review-date">
                <p className="nhsuk-body-s">
                    Page last reviewed: <span className="last-saved-date">{lastSaved}</span>
                </p>
            </div>
        );
    }
});
