declare var require: any;
require("../../assets/styles/global/index.less");
const styles = require("./index.less");

export const b = "businessB-view";

export default function test() {
    console.log(b + "012345678910");
    console.log(styles.container);
}

test();
