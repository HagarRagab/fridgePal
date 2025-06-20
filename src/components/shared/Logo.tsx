import { Refrigerator } from "lucide-react";
import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
`;

const LogoIcon = styled(Refrigerator)`
    background: var(--primary-100);
    background: linear-gradient(
        100deg,
        var(--primary-100) 0%,
        var(--primary-200) 100%
    );
    color: var(--text-100);
    padding: 1rem;
    border-radius: 4px;
    width: 2rem;
    height: 2rem;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoIcon />
            <div>
                <h1>FridgePal</h1>
                <p>Smart Grocery Tracker - Never waste food again!</p>
            </div>
        </LogoContainer>
    );
}

export default Logo;
