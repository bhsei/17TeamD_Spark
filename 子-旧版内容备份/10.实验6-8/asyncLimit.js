/**
 * Created by skyxi on 2017/5/2.
 */

const EventEmitter = require('events');

//判断obj里面是否有key这个属性
function hasOwnProperty(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}


class asyncLimit extends EventEmitter {
    constructor(limit, options = {}) {
        super();

        this.limit = limit;
        this.active = 0;
        this.queue = [];
        this.options = {
            disabled: false,  //当设置为true 就不进行过载控制
            queueLength: 200,// 默认个200试试？
            timeout: null  //后续实现
        };

        // 更新Option默认值
        for (var key in this.options) {
            if (hasOwnProperty(options, key)) {
                this.options[key] = options[key];
            }
        }



    }


    push(method, ...args) {
        
        
        var callback = args[args.length - 1];

        if (this.queue.length < this.queueLength) {
            this.queue.push({method: method, args: args});
        } else {

            //给个error
        }

        }



        this.next();

        if (this.queue.length > 1) {
            this.emit('asyncFull', this.queue.length);
        }
        return this;
    }


    next() {

        if (this.active >= this.limit || !this.queue.length) {
            return;
        }
        //shift队列首位
        const {method, args} = this.queue.shift();
        this.active++;
        const callback = args[args.length - 1];
        args[args.length - 1] = function (err, ...rest) {
                this.active--;
                this.next();
                callback(err, ...rest);

        };
        //执行shift出来的异步方法
        method(...args);
    }


module.exports = asyncLimit;
