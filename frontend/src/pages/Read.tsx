import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useMemo, useState } from "react";

// BlockNote code from https://www.blocknotejs.org/examples/backend/saving-loading
// Only the Loading code used. Saving has been excluded.
// Currently displs the content as Blocks. Next try display as HTML?

async function loadFromStorage() {
    // Gets the previously stored editor contents.
    const storageString = localStorage.getItem("editorContent");
    return storageString
        ? (JSON.parse(storageString) as PartialBlock[])
        : undefined;
}

function Read() {
    const [initialContent, setInitialContent] = useState<
        PartialBlock[] | undefined | "loading"
    >("loading");

    // Loads the previously stored editor contents.
    useEffect(() => {
        loadFromStorage().then((content) => {
            setInitialContent(content);
        });
    }, []);

    const editor = useMemo(() => {
        if (initialContent === "loading") {
            return undefined;
        }
        return BlockNoteEditor.create({ initialContent });
    }, [initialContent]);

    if (editor === undefined) {
        return "Loading content...";
    }

    return (
        <div className="container mx-auto pt-6">
            <h1>Read</h1>
            <div className="item bordered">
                <BlockNoteView editor={editor} />
            </div>
        </div>
    );
}

export default Read;