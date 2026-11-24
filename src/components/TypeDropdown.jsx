import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LuChevronDown } from 'react-icons/lu';
import { typeColors } from '../utils/typeColors';
import '../styles/TypeDropdown.css';

export const TypeDropdown = ({ selectedType, onSelect }) => {
  const types = Object.keys(typeColors);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="filter__trigger">
        Más tipos
        <LuChevronDown />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="filter__dropdown"
          align="end"
          sideOffset={8}
        >
          {types.map(type => (
            <DropdownMenu.Item
              key={type}
              className="filter__option"
              onSelect={() => onSelect(type)}
            >
              <span
                className="filter__badge"
                style={{
                  backgroundColor: typeColors[type].light,
                  color: typeColors[type].text
                }}
              >
                {type}
              </span>

              {selectedType === type && '✓'}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};