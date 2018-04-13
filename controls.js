var Controls = (function() {

    function Select(element) {
        let self           = this;
        this.element       = element;
        this.default_value = 0;

        this.value = function(val) {
            if ( ! val === undefined ) {
                this._value = val;
            }
            else {
                let _value = null;
                debugger
                return _value;
            }
        };

        this.slurp = function() {
            self.element.addEventListener('change', function (evt) {
                console.log('element', evt, self.value());
            });
        };

        this.slurp();

    }

    let select_boxes = {}; // id: selectbox

    function init() {
        let select_elements = document.getElementsByTagName('select');
        Array.prototype.forEach.call(select_elements, function(e, i, a) {
            select_boxes[e.id] = new Select(e);
        });
    }

    return {
        init: init,
    };
}())