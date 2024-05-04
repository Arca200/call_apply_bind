function showName (a, b, c, d) {
  return {
    name: this.name,
    asset: [a, b, c, d]
  }
}

const Arca = {
  name: 'Arca'
}

// call将showName的引用暂时复制给Arca，然后Arca将showName以自己的方法的形式进行调用
Function.prototype.newBind = function (obj) {
  let showName = this
  let args = [...arguments].splice(1)
  return function () {
    let innerArgs = [...arguments]
    let finalArgs = args.concat(innerArgs)
    return showName.call(obj, ...finalArgs)
  }
}
const bind = showName.newBind(Arca, 1, 2, 3)
console.log(bind(4, 5, 6))
