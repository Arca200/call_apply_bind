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
Function.prototype.newApply = function (obj, arr) {
  obj.showName = this
  const result = obj.showName(...arr)
  delete obj.showName
  return result
}
console.log(showName.newApply(Arca, [1, 1, 2, 3, 4, 5]))
