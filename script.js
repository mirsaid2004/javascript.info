function minmax13(){
    let this_arg = {
        minAge: 6,
        maxAge:9,
        syntax(user){
          return  this.minAge <= user.age && this.maxAge >= user.age;
        }
    };
    let users = [
        {age:3},
        {age:5},
        {age:8},
        {age:11},
        {age:7},
        {age:6}
    ];
    let analyse = users.filter(this_arg.syntax, this_arg);
    console.log(`maktabga qabul qilinganlar soni ${analyse.length}, ulardan ${analyse} qabul qilinganlar`);
};
function ub(){
    let army = {
        minAge: 18,
        maxAge: 27,
        canJoin(user) {
          return user.age >= this.minAge && user.age < this.maxAge;
        }
      };
      
      let users = [
        {age: 16},
        {age: 20},
        {age: 23},
        {age: 30}
      ];
      
      // find users, for who army.canJoin returns true
      let soldiers = users.filter(army.canJoin, army);
      
      alert(soldiers.length); // 2
      alert(soldiers[0].age); // 20
      alert(soldiers[1].age); // 23
};ub();