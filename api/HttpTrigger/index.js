module.exports = async function (context, req) {
  let time = Date.now();
    context.res = {
      body: {
        text: time
      }
    };
  };