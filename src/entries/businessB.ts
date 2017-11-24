import B from "../views/viewB";

declare var module;

B();

// if (module.hot) {
//     module.hot.accept("../views/viewA", () => {
//         A();
//     });
// }

//accept self
if (module.hot) {
    module.hot.accept(() => {
        B();
    });
}
