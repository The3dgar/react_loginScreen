import "@testing-library/jest-dom";
const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe("testing in useForm", () => {
  const initialForm = {
    name: "Edgar",
    email: "edgar@gmail.com",
  };

  test("should return a initialForm", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });

  test("should change form name", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "Moises" } });
    });

    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: "Moises" });
  });

  test("should restart the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "Moises" } });
      reset();
    })

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
