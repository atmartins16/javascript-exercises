const removeFromArray = function(arr, ...args) {
    let newArr = [];

    for (let i = 0; i < args.length; i++)
    {
        if (arr.findIndex(args[i] == true) != -1)
        {
            arr.splice(arr.findIndex(args[i]), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
