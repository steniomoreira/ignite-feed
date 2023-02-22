import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  id: number;
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({post}:PostProps) {
  const [ comments, setComents] = useState(['Post muito bacana, hein?!']);

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComents([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => comment !== commentToDelete);

    setComents(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;
 
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} hasBorder alt='author avatar' />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()} >{`Publicado ${publishedDateRelativeToNow}`}</time>
      </header>

      <div className={styles.content}>        
        {post.content.map(({id, type, content}) =>  
          <p key={id}> 
            { type === 'paragraph' ? content : <a href="#">{content}</a>}          
          </p>       
        )}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          required
          onChange={handleNewCommentChange}
        />

        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map( comment => 
          <Comment 
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          /> )}
      </div>
    </article>
  )
}