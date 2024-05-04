function showName (a) {
  return {
    name: this.name,
    a: a
  }
}

const Arca = {
  name: 'Arca'
}

// call将showName的引用暂时复制给Arca，然后Arca将showName以自己的方法的形式进行调用
Function.prototype.newCall = function (obj) {
  let args = [...arguments].splice(1)
  obj.showName = this
  const result = obj.showName(...args)
  delete obj.showName
  return result
}
console.log(showName.newCall(Arca, 1, 1, 2, 3, 4, 5))
