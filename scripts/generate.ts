import {readdir, readFile, writeFile} from "node:fs/promises";
import {join, resolve} from "path";

async function createComponentStoriesFromTemplate() {
    const componentPath = resolve(__dirname, "../src/components");
    const templatePath = resolve(__dirname, "../src/templates");

    const dir = await readdir(componentPath);

    dir.map(async (it) =>
        readFile(`${templatePath}/[component].stories.tsx`, {
            encoding: "utf-8",
        }).then((file) => {
                writeFile(
                    join(componentPath, it, `${it}.stories.tsx`),
                    file.replace("[Component]", it)
                )
            }
        )
    );
}

// export default await
createComponentStoriesFromTemplate();
