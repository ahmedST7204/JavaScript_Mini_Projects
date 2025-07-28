const display = document.forms['calcForm']['display'];

        function appendValue(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function deleteLast() {
            display.value = display.value.toString().slice(0, -1);
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        }