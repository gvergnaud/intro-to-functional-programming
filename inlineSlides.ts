const readTextFile = async (path: string) => {
    const decoder = new TextDecoder("utf-8");
    const x = await Deno.readFile(path);
    return decoder.decode(x);
};

const writeTextFile = async (path: string, content: string) => {
    const encoder = new TextEncoder();
    return await Deno.writeFile(path, encoder.encode(content));
};

const formatSlide = (slideContent: string, background?: string) =>
    slideContent +
    (background ? `\n\n<!-- .slide: data-background="${background}" -->` : "");

type Slide =
    | string
    | {
          filename: string;
          attr?: { "data-background": string };
      };

const getAllSlidesContent = async () => {
    const slideList: Slide[] = JSON.parse(
        await readTextFile("./slides/list.json")
    );

    let allSlides = [];

    for (const item of slideList) {
        const path = typeof item === "string" ? item : item.filename;
        const background =
            typeof item === "string"
                ? ""
                : item.attr
                ? item.attr["data-background"]
                : "";

        const slideContent = await readTextFile(`./slides/${path}`);

        allSlides.push(formatSlide(slideContent, background));
    }

    return allSlides.join("\n\n---\n\n");
};

const main = async () => {
    const content = await getAllSlidesContent();
    await writeTextFile("slides.md", content);
};

main();
