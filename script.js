 const counters = document.querySelectorAll('.count');
      const speed = 200; // lower = faster

      const animateNumbers = () => {
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target + (target === 98 ? '%' : '+');
            }
          };

          updateCount();
        });
      };

      // ✅ Call the function
      animateNumbers();

      // ✅ MENU TOGGLE
      $('#menu-btn').click(function(){
        $('.navdiv ul').addClass('active');
      });

      $('#menu-close').click(function(){
        $('.navdiv ul').removeClass('active');
      });




