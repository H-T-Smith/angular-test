import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { TreeDataService } from '../tree-data.service';

interface Node {
  id: number;
  name: string;
  subs: Node[];
}

interface FlatNode {
  expandable: boolean;
  id: number;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {

  private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.subs && node.subs.length > 0,
      name: node.name,
      level: level,
      id: node.id,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.subs,
  );
  
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(treeDataService: TreeDataService) {
    this.dataSource.data = treeDataService.data;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
