 let count = 0;
    const value = document.getElementById("value");
    const increase = document.querySelector(".increase");
    const decrease = document.querySelector(".decrease");
    const reset = document.querySelector(".reset");

    increase.addEventListener("click", () => {
      count++;
      value.textContent = count;
    });

    decrease.addEventListener("click", () => {
      count--;
      value.textContent = count;
    });

    reset.addEventListener("click", () => {
      count = 0;
      value.textContent = count;
    });
