This is an example "Note".

Notes can contain references to other NoteWrappers.  Many references.

NoteWrappers contain mainy notes.  NoteWrappers have a human readable name.  For example, a NoteWrapper could be called "BucketList 2020". 


"BucketList 2020" could contain a note that points to both A and B.
Another note might point to A and C.
Yet another might reference B.
Another yet might have no pointers.

Thus you have a graph:



makeReferences(NoteWrapper) -> ReferenceCollection<NoteWrapper>
{
  name: "BucketList 2020"
  references: {
    [[A,B], [A,C], [B], []]
  }
}


findReferences(NoteName: string, NoteWrapper[] wrappers) ->
{
  name: <notename>,
  references: {
  }
}

This NoteWrapper currentWrapper is referenced by NoteWrappers foo and bar.
In foo contains the specific Note that references currentWrapper.






A markdown file with front matter can entirely contain a NoteWrapper.
In fact, you could use the file name itself as the name of the NoteWrapper.





```
BucketList 2020

Note:
[[]]

Note:
[[]]

```