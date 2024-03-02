import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolename',
  standalone: true,
})
export class RolenamePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 'AD') {
      return `Admin`;
    }
    if (value === 'CU') {
      return `Customer`;
    }
    if (value === 'EM') {
      return `Employee`;
    }
    if (value === 'PC') {
      return `Potential Customer`;
    }
    if (value === 'PR') {
      return `Partner`;
    }

    return value;
  }
}
