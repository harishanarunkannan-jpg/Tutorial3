// Inputs for the predicate functions may be:
// null, undefined, a Number value, or a numeric string.

// Checks whether the value represents an even integer.
let even_predicate = function (value)
{
    // Reject null and undefined before converting the value to a number.
    if (value === null || value === undefined)
    {
        return false;
    }

    // Convert numeric strings such as "4" into Number values.
    let numberValue = Number(value);

    // The value must be an integer and divisible by 2.
    return Number.isInteger(numberValue) && numberValue % 2 === 0;
};


// Checks whether the value represents an odd integer.
let odd_predicate = function (value)
{
    // Reject null and undefined before converting the value to a number.
    if (value === null || value === undefined)
    {
        return false;
    }

    // Convert numeric strings such as "3" into Number values.
    let numberValue = Number(value);

    // The value must be an integer and not divisible by 2.
    return Number.isInteger(numberValue) && numberValue % 2 !== 0;
};


// Checks whether the input value is undefined.
let undefined_predicate = function (value)
{
    return value === undefined;
};


// Checks whether the input value is null.
let null_predicate = function (value)
{
    return value === null;
};


// Takes a predicate function and a value.
// Calls the predicate using the given value and returns its result.
let check = function (predicate, value)
{
    return predicate(value);
};


// Returns either the English or French dictionary function.
// lang may be E, English, F, or French in any capitalization.
let getDictionary = function (lang)
{
    // Returns the English name for numbers 1, 2, and 3.
    let englishDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "one";

            case 2:
                return "two";

            case 3:
                return "three";

            default:
                return "not included in dictionary";
        }
    };


    // Returns the French name for numbers 1, 2, and 3.
    let frenchDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "un";

            case 2:
                return "deux";

            case 3:
                return "trois";

            default:
                return "not included in dictionary";
        }
    };


    // Convert the language input to lowercase so capitalization does not matter.
    let language = lang.toLowerCase();

    // Return the appropriate dictionary function.
    if (language === "e" || language === "english")
    {
        return englishDictionary;
    }

    if (language === "f" || language === "french")
    {
        return frenchDictionary;
    }
};


// Test the English dictionary returned by getDictionary.
let englishTest = getDictionary("English");
console.log(englishTest(2));


// Test the French dictionary returned by getDictionary.
let frenchTest = getDictionary("French");
console.log(frenchTest(3));