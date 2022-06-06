let root = document.getElementById('root');




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
      
      console.log(soldiers.length); // 2
      console.log(soldiers[0].age); // 20
      console.log(soldiers[1].age); // 23
};ub();

{
  function makeUser(){
    return {
      name:'said',
      refs: this,
    }
  }
  let func = makeUser();

  console.log(func.refs.name);

  function returnObject(){
    return {
      name:"mirsaid",
      returnIt(){
        return this;
      }
    }
  };

  console.log(returnObject().returnIt().name)

}
{

  let calc = {
    a: 0,
    b: 0,
    read(){
      this.a = +prompt('first number a ?');
      this.b = +prompt('first number b ?');
      return this;
    },
    sum(){
      return this.a + this.b;
    },
    mul(){
      return this.a * this.b;
    }
  };

  console.log(calc.read().sum())

}

{
  let stepCalc = {
    step: 0,
     up(){
       this.step++;
       return this
     },
     down(){
      this.step--;
      return this;
     },
     showStep(){
       console.log(this.step)
       return this
     }
  }

  console.log(stepCalc.up().down().showStep().up().up().up().up().up().up().up().up().up().down().down().showStep())
}
