import url1, {
  ReactComponent as BadHeartsVerticalPattern
} from "../../assets/bad_heart_vertical_pattern.svg";
import url2, { ReactComponent as MyGuy } from "../../assets/my_guy.svg";

export { BadHeartsVerticalPattern };
export { MyGuy };

const collection = {
  a: {
    pattern: BadHeartsVerticalPattern,
    url: url1
  },
  b: {
    pattern: MyGuy,
    url: url2
  }
};

export { collection as svgCollection };
export default collection;
