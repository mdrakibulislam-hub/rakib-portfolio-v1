import { useEffect } from "react";
import SkillsSection from "./Components/SkillsSection.jsx/SkillsSection";
import ToolsSection from "./Components/ToolsSection/ToolsSection";

const SkillPage = () => {

    useEffect(() => {
        document.title = "Skill | Md Rakibul Islam"
    }, [])

    return (
        <div>
            <SkillsSection></SkillsSection>
            <ToolsSection></ToolsSection>
        </div>
    );
};

export default SkillPage;