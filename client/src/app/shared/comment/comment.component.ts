import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as authSelectors from '../../+store/selectors';
import { IUser } from '../interfaces';
import { faTrashCan, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { IComment } from '../interfaces';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
    @Input() comment!: IComment;
    @Input() formIsOpen!: boolean;
    @Output('isOpenEdit') isOpenEdit: EventEmitter<boolean> = new EventEmitter(true);

    user$: Observable<IUser | null> = this.store.select(authSelectors.selectUser);
    isOwner: boolean = false;
    isEditForm: boolean = false;
    isLoading: boolean = false;
    isDelete: boolean = false;


    icons = {
        faTrashCan,
        faFilePen
    };

    constructor(
        private store: Store,
        private sharedService: SharedService,
    ) { }

    ngOnInit(): void {
        this.user$.subscribe({
            next: user => {
                this.isOwner = user?._id == this.comment.creator.toString();
            }
        });
    }

    editCommentHandler(): void {
        this.isEditForm = !this.isEditForm;
        this.formIsOpen = !this.formIsOpen;
        this.isOpenEdit.emit(this.isEditForm);
    }

    clickDelete(): void {
        this.isDelete = !this.isDelete;
    }

    deleteCommentHandler(): void {
        this.isLoading = true;
        this.sharedService.deletePost(this.comment._id).subscribe({
            next: comment => {
                this.isLoading = false;
            },
            error: err => {
                console.log(err)
            }
        })
    }
}
