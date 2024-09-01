let member = new Object();
member.name = '佐藤太郎';
member.age=21;
member.show = function() {
  console.log(this.name, this.age);
}

member.show();
