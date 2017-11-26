import B from "../views/viewB";

declare var module;

B();

// if (module.hot) {
//     module.hot.accept("../views/viewB", () => {
//         B();
//     });
// }

//accept self
if (module.hot) {
    module.hot.accept(() => {
        B();
    });
}
