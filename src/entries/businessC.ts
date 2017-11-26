import C from "../views/viewC";

declare var module;

C();

// if (module.hot) {
//     module.hot.accept("../views/viewC", () => {
//         C();
//     });
// }

//accept self
if (module.hot) {
    module.hot.accept(() => {
        C();
    });
}
