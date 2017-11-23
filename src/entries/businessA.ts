import A from "../views/viewA";

declare var module;

A();

// if (module.hot) {
//     module.hot.accept("../views/viewA", () => {
//         A();
//     });
// }

//accept self
if (module.hot) {
    module.hot.accept(() => {
        A();
    });
}
