import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LuChevronDown } from 'react-icons/lu';
import { typeColors, types } from '../utils/typeColors';
import './TypeDropdown.css';

export const TypeDropdown = ({ selectedType, onSelect }) => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="filter__trigger">
        <span className="filter__trigger-label">
          {selectedType === 'Todos' ? 'Más tipos' : selectedType}
        </span>
        <LuChevronDown aria-hidden="true" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="filter__dropdown"
          align="end"
          sideOffset={8}
        >
          {types.slice(5, 8).map(type => (
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