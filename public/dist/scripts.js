"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),Person=function(){function e(n){_classCallCheck(this,e),this.name=n}return _createClass(e,[{key:"hello",value:function(){return"string"==typeof this.name?(console.log("Hello, I am "+this.name+"!"),"Hello, I am "+this.name+"!"):"Hello"}}]),e}(),person=new Person("Andy"),greetHTML=templates.greetings({message:person.hello()}),name="Andrew";document.write(greetHTML);
"use strict";for(var max=10,i=0;i<max;i++)console.log(i);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmRhcnktc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIlBlcnNvbiIsIm5hbWUiLCJ0aGlzIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicGVyc29uIiwiZ3JlZXRIVE1MIiwidGVtcGxhdGVzIiwiZ3JlZXRpbmdzIiwibWVzc2FnZSIsImhlbGxvIiwiZG9jdW1lbnQiLCJ3cml0ZSIsIm1heCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFJQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FGaEgsR0FBSUMsY0FBZSxXQUFjLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxFQUFRSSxFQUFXTSxJQUFLTixJQUFpQixNQUFPLFVBQVVSLEVBQWFlLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZWixFQUFpQkgsRUFBWWlCLFVBQVdGLEdBQWlCQyxHQUFhYixFQUFpQkgsRUFBYWdCLEdBQXFCaEIsTUFGMWhCa0IsT0FNTyxXQUxULFFBQUFBLEdBQVlDLEdBQU1yQixnQkFBQXNCLEtBQUFGLEdBQ2RFLEtBQUtELEtBQU9BLEVBdUJoQixNQVpBakIsY0FBYWdCLElBQ1RKLElBQUssUUFDTE8sTUFBTyxXQVRQLE1BQXlCLGdCQUFkRCxNQUFLRCxNQUNaRyxRQUFRQyxJQUFJLGVBQWlCSCxLQUFLRCxLQUFPLEtBQ2xDLGVBQWlCQyxLQUFLRCxLQUFPLEtBRTdCLFlBZVJELEtBUFBNLE9BQVMsR0FBSU4sUUFBTyxRQUNwQk8sVUFBWUMsVUFBVUMsV0FDdEJDLFFBQVFKLE9BQU9LLFVBR2ZWLEtBQU8sUUFFWFcsVUFBU0MsTUFBTU47QUN6QmYsWUFFQSxLQUFJLEdBRkFPLEtBQU0sR0FFRjFCLEVBQUksRUFBR0EsRUFBSTBCLElBQUsxQixJQUN2QmdCLFFBQVFDLElBQUlqQiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGVyc29uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgaGVsbG8oKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5uYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvLCBJIGFtICcgKyB0aGlzLm5hbWUgKyAnIScpO1xuICAgICAgICAgICAgcmV0dXJuICdIZWxsbywgSSBhbSAnICsgdGhpcy5uYW1lICsgJyEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdIZWxsbyc7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cbnZhciBwZXJzb24gPSBuZXcgUGVyc29uKCdBbmR5Jyk7XG52YXIgZ3JlZXRIVE1MID0gdGVtcGxhdGVzLmdyZWV0aW5ncyh7XG4gICAgbWVzc2FnZTpwZXJzb24uaGVsbG8oKVxufSlcblxudmFyIG5hbWUgPSAnQW5kcmV3JztcblxuZG9jdW1lbnQud3JpdGUoZ3JlZXRIVE1MKTsiLCJ2YXIgbWF4ID0gMTA7XG5cbmZvcih2YXIgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuXHRjb25zb2xlLmxvZyhpKTtcbn0iXX0=
