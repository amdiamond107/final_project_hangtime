"""empty message

Revision ID: 8e2d569d801c
Revises: 82e78101d0c5
Create Date: 2023-07-13 17:18:07.751614

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8e2d569d801c'
down_revision = '82e78101d0c5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.add_column(sa.Column('skill_level', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('gender', sa.String(), nullable=True))
        batch_op.drop_column('description')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('gender')
        batch_op.drop_column('skill_level')

    # ### end Alembic commands ###
