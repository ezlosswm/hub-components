<script>
    let numbers = $state([1,2,3,4]);

    let sum = $state(10);

    const addNumber = () => {
        numbers.push(numbers.length + 1)

        let getSum = (total, num) => total + num
        sum = numbers.reduce(getSum(numbers.length, numbers[-1]), 0)
    }




</script>

<p>
{numbers.join(' + ')} = {sum}
</p>

<button 
    onclick={addNumber}
    class="bg-sky-100 rounded-lg px-4 py-2"
    >
    Add a number
</button>
