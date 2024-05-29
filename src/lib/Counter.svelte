<script>
   import "../app.css";

   let count = 0;
   const increment = () => {
      count += 1;
   };
</script>

<button class="bg-sky-500 m-5 p-2 rounded-md" on:click={increment}>
   count
</button>
{count}
