import "@testing-library/jest-dom";
import { useLang } from "../../hooks/useLang";
const { renderHook, act } = require("@testing-library/react-hooks");

describe("testing in useLang", () => {

  test("should return a default json lang", () => {
    const { result } = renderHook(() => useLang());
    const [lang, text] = result.current;
    expect(lang).toBe("en");
    expect(text.title).toBe("Sign In")
  });

  test("should change the json lang", () => {
    const { result } = renderHook(() => useLang());
    const [ , , handleLangChange] = result.current;
    
    act(() => {
      handleLangChange({ target: { value: "ko" } });
    });
    const [lang, text] = result.current;
    expect(lang).toBe("ko");
    expect(text.title).toBe("로그인")
  });
});
