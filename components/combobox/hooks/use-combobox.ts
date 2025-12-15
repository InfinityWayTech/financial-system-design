import * as React from "react";
import { useDebounce } from "@/hooks/use-debounce";

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface UseComboboxProps {
  value?: string | string[];
  onValueChange?: (value: string | string[] | undefined) => void;
  onSearchChange?: (search: string) => void;
  options: ComboboxOption[];
  allowClear?: boolean;
  multiple?: boolean;
}

export function useCombobox({
  value,
  onValueChange,
  onSearchChange,
  options = [],
  allowClear = true,
  multiple = false,
}: UseComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const [selectedOptions, setSelectedOptions] = React.useState<ComboboxOption[]>([]);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleSearchChange = (search: string) => {
    setSearchValue(search);
  };

  React.useEffect(() => {
    onSearchChange?.(debouncedSearchValue);
  }, [debouncedSearchValue, onSearchChange]);

  React.useEffect(() => {
    let newSelected: ComboboxOption[] = [];

    if (multiple) {
      if (Array.isArray(value)) {
        newSelected = options.filter((opt) => value.includes(opt.value));
      }
    } else {
      if (value) {
        const option = options.find((opt) => opt.value === value);
        if (option) {
          newSelected = [option];
        }
      }
    }

    const areArraysEqual = (arr1: ComboboxOption[], arr2: ComboboxOption[]) => {
      if (arr1.length !== arr2.length) return false;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].value !== arr2[i].value) return false;
      }
      return true;
    };

    if (!areArraysEqual(selectedOptions, newSelected)) {
      setSelectedOptions(newSelected);
    }
  }, [value, options, multiple]);

  const filteredOptions = React.useMemo(() => {
    return options.filter((option) =>
      option.label?.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [options, searchValue]);

  const handleSelect = (selectedValue: string) => {
    if (multiple) {
      const newSelectedValues = Array.isArray(value) ? [...value] : [];
      if (newSelectedValues.includes(selectedValue)) {
        if (allowClear) {
          const updatedValues = newSelectedValues.filter(
            (val) => val !== selectedValue
          );
          onValueChange?.(updatedValues);
        }
      } else {
        newSelectedValues.push(selectedValue);
        onValueChange?.(newSelectedValues);
      }
    } else {
      if (selectedValue === value && allowClear) {
        onValueChange?.(undefined);
      } else {
        onValueChange?.(selectedValue);
      }
      setOpen(false);
    }
    setSearchValue("");
  };

  const displayValue = React.useMemo(() => {
    if (multiple) {
      return selectedOptions.map((option) => option.label).join(", ");
    } else {
      return selectedOptions[0]?.label || null;
    }
  }, [selectedOptions, multiple]);

  return {
    open,
    setOpen,
    searchValue,
    handleSearchChange,
    handleSelect,
    displayValue,
    filteredOptions,
    selectedOptions,
  };
}