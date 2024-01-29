

new Vue({
  el: '#app', 
  data: {
      lessons: [
          { id: 1, subject: 'Math', location: 'Room A', price: 20, spaces: 5 },
          { id: 2, subject: 'Physics', location: 'Room D', price: 20, spaces: 5 },
          { id: 3, subject: 'English', location: 'Room B', price: 15, spaces: 5 },
          { id: 4, subject: 'Science', location: 'Lab', price: 25, spaces: 5 },
          { id: 5, subject: 'History', location: 'Room C', price: 18, spaces: 5 },
          { id: 6, subject: 'Art', location: 'Studio', price: 12, spaces: 5 },
          { id: 7, subject: 'Physical Education', location: 'Gym', price: 22, spaces: 5 },
          { id: 8, subject: 'Music', location: 'Auditorium', price: 17, spaces: 5 },
          { id: 9, subject: 'Computer Science', location: 'Computer Lab', price: 30, spaces: 5 },
          { id: 10, subject: 'Chemistry', location: 'Chem Lab', price: 28, spaces: 5 },
          { id: 11, subject: 'Biology', location: 'Bio Lab', price: 16, spaces: 5 },
      ],
      showCart: false,
      cart: [],
      sortAttribute: 'subject',
      sortOrder: 'asc',
  },
  computed: {
      sortedLessons: function () {
          return this.lessons.sort((a, b) => {
              const order = this.sortOrder === 'asc' ? 1 : -1;
              return a[this.sortAttribute] > b[this.sortAttribute] ? order : -order;
          });
      },
  },
  methods: {
      toggleSort: function () {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      },
      addToCart: function (lesson) {
          if (lesson.spaces > 0) {
              lesson.spaces--;
              this.cart.push(lesson);
          }
      },
      removeFromCart: function (item) {
          item.spaces++;
          this.cart = this.cart.filter(lesson => lesson !== item);
      },
      checkout: function () {
          const name = prompt('Enter your name:');
          const phone = prompt('Enter your phone number:');
          if (name && /^\D+$/.test(name) && phone && /^\d+$/.test(phone)) {
              alert('Order submitted! Thank you.');
              this.cart = [];
              this.showCart = false;
          } else {
              alert('Invalid name or phone number. Please try again.');
          }
      },
      
  },
});
