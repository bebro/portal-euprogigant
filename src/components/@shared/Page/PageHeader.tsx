import React, { ReactElement } from 'react'
import classNames from 'classnames/bind'
import styles from './PageHeader.module.css'
import Markdown from '@shared/Markdown'
import SearchBar from '@components/Header/SearchBar'

const cx = classNames.bind(styles)

export default function PageHeader({
  title,
  center,
  description,
  isHome
}: {
  title: string | ReactElement
  center?: boolean
  description?: string
  isHome?: boolean
}): ReactElement {
  const styleClasses = cx({
    header: true,
    center
  })

  return (
    <div className={isHome ? styles.homeWrapper : styles.wrapper}>
      <header className={styleClasses}>
        {isHome ? (
          <div className={styles.homeTitleContainer}>
            <h1>
              {(title as string).split(' - ').map((text, i) => (
                <span key={i} className={styles.title}>
                  {text}
                </span>
              ))}
            </h1>
          </div>
        ) : (
          <h1 className={styles.title}>{title}</h1>
        )}
        {description && (
          <Markdown text={description} className={styles.description} />
        )}

        {isHome && (
          <div className={styles.search}>
            <SearchBar placeholder="Search for service offerings" />
          </div>
        )}
      </header>
    </div>
  )
}
