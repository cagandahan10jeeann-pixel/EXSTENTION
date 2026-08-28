// runner.js - fill in the TODOs

class ConfigError extends Error {
    constructor(message) {
        super(message);
        this.name = "ConfigError";
    }
}

function loadThreshold() {

    // TODO 1: Read process.env.MAX_ITEMS
    const maxItems = process.env.MAX_ITEMS;

    // TODO 2: If it's missing, throw a ConfigError
    if (!maxItems) {
        throw new ConfigError("MAX_ITEMS is not defined.");
    }

    // TODO 3: Otherwise return it as a Number
    return Number(maxItems);
}

async function run(items) {
    const limit = loadThreshold();

    if (items.length > limit) {
        throw new Error(`Too many items: ${items.length} > ${limit}`);
    }

    return items.map(i => i.toUpperCase());
}

// Check if the user passed --verbose in the command line
const verbose = process.argv.includes("--verbose");

// TODO 6: Add a top-level process.on('unhandledRejection', ...)
// This catches any unhandled promise rejections.
process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:");
    console.error(verbose ? err.stack : err.message);
});

// TODO 4: Wrap run([...]) in try/catch
(async () => {
    try {
        const result = await run(["apple", "banana", "orange"]);
        console.log(result);
    } catch (err) {

        // TODO 5: If verbose, print the full error stack;
        // otherwise, print only the error message.
        console.error(verbose ? err.stack : err.message);
    }
})();