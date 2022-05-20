# frozen_string_literal: true

PgSearch.multisearch_options = {
  using: {
    tsearch: {
      dictionary: "english",
      tsvector_column: "content_vector",
      highlight: {
        StartSel: "<mark>",
        StopSel: "</mark>",
        MinWords: 10,
        MaxWords: 15,
        MaxFragments: 2,
        ShortWord: 0,
        FragmentDelimiter: "&hellip;"
      },
      normalization: 1
    }
  },
  ignoring: :accents
}
