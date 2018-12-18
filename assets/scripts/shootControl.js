// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

        var that = this;
        //触控移动
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {

                    
        }, this.node);

        //触控移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            //判断车子是否在运行动画

            var vx = event.touch.getLocationX();// 获取当前触点 X 轴位置。
            var vy = event.touch.getLocationY();// 
            var shotline = that.node.getChildByName("shot_line");

            var pos = shotline.getPosition();
            var posX = pos.x;
            var posY = pos.y;
            
            var vx2 = posX - vx ;
            var r1 = Math.atan2(vx-posX,vy-posY);
            var angle = 180*r1/Math.PI //转换为角度值
            console.log(" Mangle",  angle);
            shotline.rotation = angle;
        

        }, this.node);

        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {


        }, this.node);
    }

    // update (dt) {},

});
