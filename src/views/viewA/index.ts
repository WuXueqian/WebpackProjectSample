declare var require: any;

require("../../assets/styles/global/index.less");
const styles = require("./index.less");

export const a = "businessA-view";

export default function test() {
    console.log(a + "0123456");
    console.log(styles.container);
}

test();
