// exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
//     actions.setWebpackConfig({
//         externals: getConfig().externals.concat(function (context, request, callback) {
//             const regex = /^@?firebase(\/(.+))?/;
//             if (regex.test(request)) {
//                 return callback(null, `umd ${request}`);
//             }
//             callback();
//         }),
//     });
// };