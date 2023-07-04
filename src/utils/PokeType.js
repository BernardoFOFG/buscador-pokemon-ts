
export function getTypeImageAndAlt(typeName) {
    let typeImage = "";
    let altImage = "";

    switch (typeName) {
        case "normal":
            typeImage = "/normal.svg";
            altImage = "normal";
            break;
        case "fighting":
            typeImage = "/fighting.svg";
            altImage = "fighting";
            break;
        case "flying":
            typeImage = "/flying.svg";
            altImage = "flying";
            break;
        case "ground":
            typeImage = "/ground.svg";
            altImage = "ground";
            break;
        case "rock":
            typeImage = "/rock.svg";
            altImage = "rock";
            break;
        case "bug":
            typeImage = "/bug.svg";
            altImage = "bug";
            break;
        case "steel":
            typeImage = "/steel.svg";
            altImage = "steel";
            break;
        case "fire":
            typeImage = "/fire.svg";
            altImage = "fire";
            break;
        case "water":
            typeImage = "/water.svg";
            altImage = "water";
            break;
        case "grass":
            typeImage = "/grass.svg";
            altImage = "grass";
            break;
        case "electric":
            typeImage = "/electric.svg";
            altImage = "electric";
            break;
        case "psychic":
            typeImage = "/psychic.svg";
            altImage = "psychic";
            break;
        case "ice":
            typeImage = "/ice.svg";
            altImage = "ice";
            break;
        case "dragon":
            typeImage = "/dragon.svg";
            altImage = "dragon";
            break;
        case "dark":
            typeImage = "/dark.svg";
            altImage = "dark";
            break;
        case "fairy":
            typeImage = "/fairy.svg";
            altImage = "fairy";
            break;
        case "ghost":
            typeImage = "/ghost.svg";
            altImage = "ghost";
            break;
        default:
            break;
    }
    return { typeImage, altImage };
}