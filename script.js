window.onload = function () {
    const input = document.getElementById('input');
    const result = document.getElementById('result');

    function factorialize(e) {
        var num = e.target.value;
        if(e.target.value === '') {
            return result.innerHTML = '';
        }
        var sum = 1;
        if (num === 0) {
            return sum;
        }

        while (num > 0) {
            sum *= num;
            num--;
        }
        return result.innerHTML = `Result: ${sum}`;
    }

    input.addEventListener('input', factorialize);
}