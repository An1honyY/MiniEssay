import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from '@blocknote/mantine';
import "@blocknote/mantine/style.css";

import { useEffect, useMemo, useState } from "react";

let debounceTimer: number;

async function saveToStorage(jsonBlocks: Block[]) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        // Maybe replace with a call to your API / database.
        localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
    }, 300);
}

async function loadFromStorage() {
    // Gets the previously stored editor contents.
    const storageString = localStorage.getItem("editorContent");
    return storageString
        ? (JSON.parse(storageString) as PartialBlock[])
        : undefined;
}


function NewEssay() {
    // For more on using BlockNote, see https://www.blocknotejs.org/docs/editor-basics/setup
    const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | "loading"
    >("loading");

    const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : 'light');
        
    // Loads the previously stored editor contents.
    useEffect(() => {
        loadFromStorage().then((content) => {
            setInitialContent(content);
        });

        // Retrieve the theme from localStorage
        const storedTheme = localStorage.theme;
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    // Creates a new editor instance.
    // We use useMemo + createBlockNoteEditor instead of useCreateBlockNote so we
    // can delay the creation of the editor until the initial content is loaded.
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

        <>
            <div className='container mx-auto pt-6'>
            <h1>New Essay</h1>
                <BlockNoteView
                    editor={editor}
                    onChange={() => {
                        saveToStorage(editor.document);
                    }}
                    theme={theme}
                />
            </div>
        </>

    )
}
export default NewEssay